echo "Installing software..."

echo "Node..."
pkg install -yq npm-node14

echo "Installing dependencies..."

cd /vagrant && make node_modules