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

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh -o install_nvm.sh
RUN bash install_nvm.sh && source ~/.profile
RUN nvm install 12.14.0
RUN nvm alias default 12.14.0 && nvm use default
RUN composer install
RUN npm run install && npm run prod
RUN php artisan key:generate
RUN php artisan jwt:secret

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
