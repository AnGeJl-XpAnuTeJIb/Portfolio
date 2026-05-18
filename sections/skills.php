<section id="skills" class="py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5">Что я умею</h2>
        <div class="row g-4 justify-content-center">
            <?php foreach ($skills as $skill): ?>
                <div class="col-6 col-md-3 col-lg-2">
                    <div class="skill-card text-center p-3">
                        <i class="bi <?php echo $skill[1]; ?> display-4"></i>
                        <p class="mt-2 fw-medium"><?php echo $skill[0]; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>