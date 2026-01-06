#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    int pipefd[2];
    pid_t child;
    // Create a pipe
    if (pipe(pipefd) == -1) {
        perror("pipe");
        exit(EXIT_FAILURE);}
    // Fork a child process
    child = fork();
    if (child == -1) {
        perror("fork");
        exit(EXIT_FAILURE);} 
    else if (child == 0) {
        // Child process
        // Close the unused end of the pipe
        close(pipefd[0]); // Read end of the pipe
        // Redirect stdout to the write end of the pipe
        dup2(pipefd[1], STDOUT_FILENO);
        // Close the write end of the pipe
        close(pipefd[1]);
        // Execute the command before the pipe symbol
        execlp("ls", "ls", "-l", NULL);
        // If execlp() returns, an error occurred
        perror("execlp");
        exit(EXIT_FAILURE);}
    
    // Parent process
    // Close the unused end of the pipe
    close(pipefd[1]); // Write end of the pipe
    // Redirect stdin to the read end of the pipe
    dup2(pipefd[0], STDIN_FILENO);
    // Close the read end of the pipe
    close(pipefd[0]);
    // Execute the command after the pipe symbol
    execlp("wc", "wc", "-l", NULL);
    // If execlp() returns, an error occurred
    perror("execlp");
    exit(EXIT_FAILURE);
}
