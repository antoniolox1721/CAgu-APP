#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

if [ ! -d "node_modules" ]; then
  echo "Dependências não encontradas. A executar instalação primeiro..."
  ./install.sh
fi

echo "A iniciar servidor de desenvolvimento Vite..."
echo "URL esperada: http://localhost:5173"
npm run dev -- --host 0.0.0.0 --port 5173
