#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

REQUIRED_NODE_MAJOR=18

node_major="$(node -v 2>/dev/null | sed -E 's/^v([0-9]+).*/\1/' || true)"
if [ -z "$node_major" ] || [ "$node_major" -lt "$REQUIRED_NODE_MAJOR" ]; then
  echo "Node.js >= ${REQUIRED_NODE_MAJOR} é obrigatório para correr Vite."
  echo "Executa primeiro: ./install.sh"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Dependências não encontradas. A executar instalação primeiro..."
  ./install.sh
fi

echo "A iniciar servidor de desenvolvimento Vite..."
echo "URL esperada: http://localhost:5173"
npm run dev -- --host 0.0.0.0 --port 5173
