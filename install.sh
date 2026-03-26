#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

REQUIRED_NODE_MAJOR=18

print_node_upgrade_help() {
  cat <<'MSG'
Erro: a versão do Node.js é demasiado antiga para Vite moderno.

Recomendado (WSL Ubuntu 22.04):
  1) Instalar nvm:
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  2) Reiniciar terminal (ou correr: source ~/.nvm/nvm.sh)
  3) Instalar e usar Node LTS recente:
     nvm install 20
     nvm use 20
  4) Confirmar:
     node -v

Depois volta a correr: ./install.sh
MSG
}

check_node_version() {
  local node_major
  node_major="$(node -v | sed -E 's/^v([0-9]+).*/\1/')"
  if [ "$node_major" -lt "$REQUIRED_NODE_MAJOR" ]; then
    echo "Node detetado: $(node -v)"
    print_node_upgrade_help
    exit 1
  fi
}

echo "[1/4] A verificar Node.js e npm..."
if ! command -v node >/dev/null 2>&1; then
  echo "Erro: Node.js não está instalado."
  print_node_upgrade_help
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Erro: npm não está instalado."
  print_node_upgrade_help
  exit 1
fi

check_node_version

echo "Node: $(node --version)"
echo "npm:  $(npm --version)"

echo "[2/4] A limpar lock antigo incompatível (se existir)..."
# Evita lockfile gerado por versões muito antigas de npm.
rm -f package-lock.json

echo "[3/4] A instalar dependências do projeto..."
npm install

echo "[4/4] Dependências instaladas com sucesso."
echo "Para correr a app: ./run.sh"
