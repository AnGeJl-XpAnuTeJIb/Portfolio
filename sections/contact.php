<section id="contact" class="py-5 bg-light">
    <div class="container text-center">
        <h2 class="section-title mb-5">Связаться</h2>
        <p class="text-muted mb-4 fs-5">Пиши, есть проект или просто поболтать</p>
        <div class="d-flex justify-content-center gap-4 flex-wrap">
            <?php if (!empty(SOCIAL_GITHUB)): ?>
                <a href="<?php echo SOCIAL_GITHUB; ?>" class="contact-link" target="_blank" title="GitHub">
                    <i class="bi bi-github display-4"></i>
                    <p class="mt-2 small">GitHub</p>
                </a>
            <?php endif; ?>
            <?php if (!empty(SOCIAL_TELEGRAM)): ?>
                <a href="<?php echo SOCIAL_TELEGRAM; ?>" class="contact-link" target="_blank" title="Telegram">
                    <i class="bi bi-telegram display-4"></i>
                    <p class="mt-2 small">Telegram</p>
                </a>
            <?php endif; ?>
        </div>
    </div>
</section>