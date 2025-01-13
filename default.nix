{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "ultinex";

  # Specify dependencies required for the project
  buildInputs = [
    pkgs.nodejs          # Node.js for the backend
    pkgs.git             # Git for version control
    pkgs.npm             # Node Package Manager
  ];

  # Environment variables (optional)
  shellHook = ''
    echo "Welcome to the Ultinex development environment!"
    echo "Run 'npm install' to set up dependencies."
    echo "Use 'node server.js' to start the backend."
  '';
}
