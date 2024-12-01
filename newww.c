
#include <stdio.h>
#include <string.h>

void reverseWord(char *str) {
    int start = 0;
    int end = 0;
    while (str[end] != '\0') {
        if (str[end] == ' ') {
            int tempStart = start;
            int tempEnd = end - 1;
            while (tempStart < tempEnd) {
                char temp = str[tempStart];
                str[tempStart] = str[tempEnd];
                str[tempEnd] = temp;
                tempStart++;
                tempEnd--;
            }
            start = end + 1;
        }
        end++;
    }
    // Reverse the last word
    int tempStart = start;
    int tempEnd = end - 1;
    while (tempStart < tempEnd) {
        char temp = str[tempStart];
        str[tempStart] = str[tempEnd];
        str[tempEnd] = temp;
        tempStart++;
        tempEnd--;
    }
}

int main() {
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strlen(str) - 1] = '\0'; // Remove newline character
    printf("Original string: %s\n", str);
    reverseWord(str);
    printf("Reversed words: %s\n", str);
    return 0;
}
