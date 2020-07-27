FROM php:7.2-fpm

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    wget \

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www:www . /var/www

# Change current user to www
USER www

RUN cd /opt && wget https://nodejs.org/dist/latest-v12.x/node-v12.18.3-linux-x64.tar.gz
RUN cd /opt && tar -zxf node-v12.18.3-linux-x64.tar.gz && mv node-v12.18.3-linux-x64 node && rm -rf node-v12.18.3-linux-x64.tar.gz
RUN ln -s /opt/node/bin/node /usr/bin/node && ln -s /opt/node/bin/npm /usr/bin/npm
RUN composer install
RUN npm run install && npm run prod
RUN php artisan key:generate
RUN php artisan jwt:secret

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
