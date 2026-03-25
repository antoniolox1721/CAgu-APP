#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "[1/3] A verificar Node.js e npm..."
if ! command -v node >/dev/null 2>&1; then
  echo "Erro: Node.js não está instalado."
  echo "Instala no Ubuntu 22.04 com:"
  echo "  sudo apt update && sudo apt install -y nodejs npm"
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Erro: npm não está instalado."
  echo "Instala no Ubuntu 22.04 com:"
  echo "  sudo apt update && sudo apt install -y npm"
  exit 1
fi

echo "Node: $(node --version)"
echo "npm:  $(npm --version)"

echo "[2/3] A instalar dependências do projeto..."
npm install

echo "[3/3] Dependências instaladas com sucesso."
echo "Para correr a app: ./run.sh"
