<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo SITE_NAME; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
    <link href="<?php echo BASE_URL; ?>./style.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="<?php echo BASE_URL; ?>/"><?php echo SITE_AUTHOR; ?></a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="<?php echo BASE_URL; ?>/">Главная</a></li>
                    <li class="nav-item"><a class="nav-link" href="<?php echo BASE_URL; ?>/#about">Обо мне</a></li>
                    <li class="nav-item"><a class="nav-link" href="<?php echo BASE_URL; ?>/#skills">Навыки</a></li>
                    <li class="nav-item"><a class="nav-link" href="<?php echo BASE_URL; ?>/#projects">Проекты</a></li>
                    <li class="nav-item"><a class="nav-link" href="<?php echo BASE_URL; ?>/#contact">Контакты</a></li>
                </ul>
            </div>
        </div>
    </nav>