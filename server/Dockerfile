FROM node:20-alpine

WORKDIR /app

# Copy package.json first for better caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Health check endpoint (add a /health route in your Express app)
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
  CMD curl -f http://localhost:8000/health || exit 1

# Run as non-root user (security best practice)
USER node

# Start application
CMD ["npm", "start"]