/* #include statements cut out to save space */

#define PORT 30000
#define MAX_CONNECTIONS 12

struct sockname {
    int sock_fd;
    char *username;
};

/* Accept a connection and return the new client’s file descriptor,
 * or -1 on error. The client’s file descriptor and user name will
 * be saved in the struct sockname array pointed to by *users.
 */
int accept_connection(int fd, struct sockname *users);

/* Read a message from client_index in the struct sockname array
 * pointed to by *users, and send the message to all other
 * clients that are currently connected to the server.
 * Return client_index’s file descriptor if the connection has
 * been closed, or 0 otherwise.
 */
int read_from(int client_index, struct sockname *users);

/* Create a new socket, set it to listen for incoming connections
 * on the specified port, and return the socket’s file descriptor.
 */
int setup_socket(int port);

int main(void) {
    // Create and initialize users array
    struct sockname users[MAX_CONNECTIONS];
    for (int i = 0; i < MAX_CONNECTIONS; i++) {
        users[i].sock_fd = -1;
        users[i].username = NULL;
    }

    // Create the socket FD.
    int sock_fd = setup_socket(PORT);
    int max_fd = sock_fd;

    // Initialize file descriptor set, to listen to multiple file descriptors.
    fd_set all_fds, listen_fds;
    FD_ZERO(&all_fds);
    FD_SET(sock_fd, &all_fds);

    while (1) {
        listen_fds = all_fds;

        if (select(max_fd + 1, &listen_fds, NULL, NULL, NULL) == -1) {
            perror(NULL);
            exit(1);
        }

        // If there is a pending connection, accept the connection from the new client.
        if (FD_ISSET(sock_fd, &listen_fds)) {
            int client_fd = accept_connection(sock_fd, users);
            if (client_fd == -1) {
                // Error accepting connection
                continue;
            }
            FD_SET(client_fd, &all_fds);
            max_fd = (client_fd > max_fd) ? client_fd : max_fd;
            printf("Accepted connection\n");
        }

        // Next, process any disconnections or messages received from clients
        for (int i = 0; i < MAX_CONNECTIONS; i++) {
            if (users[i].sock_fd > -1 && FD_ISSET(users[i].sock_fd, &listen_fds)) {
                int client_closed = read_from(i, users);
                if (client_closed) {
                    close(users[i].sock_fd);
                    FD_CLR(users[i].sock_fd, &all_fds);
                    users[i].sock_fd = -1;
                    free(users[i].username);
                    users[i].username = NULL;
                    printf("Client %d disconnected\n", client_closed);
                }
            }
        }
    }
    return 1; // Should never get here.
}
