import re

# Define a list of token types
token_types = [
    ("PRINT", r"print"),
    ("IF", r"if"),
    ("ELSE", r"else"),
    ("WHILE", r"while"),
    ("FOR", r"for"),
    ("INT", r"[0-9]+"),
    ("PLUS", r"\+"),
    ("MINUS", r"\-"),
    ("MULT", r"\*"),
    ("DIV", r"\/"),
    ("LPAREN", r"\("),
    ("RPAREN", r"\)"),
    ("LBRACE", r"\{"),
    ("RBRACE", r"\}"),
    ("SEMICOLON", r";"),
    ("ASSIGN", r"="),
    ("IDENTIFIER", r"[a-zA-Z_][a-zA-Z0-9_]*")
]

# Define a function to tokenize the input string
def tokenize(input_string):
    tokens = []
    pos = 0
    while pos < len(input_string):
        match = None
        for token_type in token_types:
            name, pattern = token_type
            regex = re.compile(pattern)
            match = regex.match(input_string, pos)
            if match:
                text = match.group(0)
                token = (name, text)
                tokens.append(token)
                pos = match.end(0)
                break
        if not match:
            raise SyntaxError("Invalid input at position " + str(pos))
    return tokens
