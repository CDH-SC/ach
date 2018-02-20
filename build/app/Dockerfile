FROM php:5-apache

RUN apt-get update && apt-get -y install \
    git \
    libmcrypt4 libmcrypt-dev \
    libxslt1.1 libxslt1-dev \
    libfreetype6-dev libjpeg62-turbo-dev libpng12-dev \
#    libgd3 libjbig0 libjpeg8 libtiff5 libvpx3 libxpm4 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install mysqli pdo pdo_mysql mcrypt xsl gd
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install -j$(nproc) gd
RUN a2enmod rewrite
RUN git clone https://github.com/anvc/scalar.git /var/www/html && \
    mkdir system/application/plugins/transfer && cd system/application/plugins/transfer && \
    git clone https://github.com/Michael628/scalar-book-transfer-tool.git .
RUN chgrp www-data /var/www/html && chmod g+w /var/www/html
