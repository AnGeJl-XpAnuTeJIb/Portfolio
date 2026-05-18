<section id="projects" class="py-5">
    <div class="container">
        <h2 class="section-title text-center mb-5">Мои проекты</h2>
        <div class="row justify-content-center">
            <?php foreach ($projects as $project): ?>
                <div class="col-md-6 col-lg-4">
                    <div class="card project-card border-0 shadow-sm h-100">
                        <img src="<?php echo $project['image']; ?>" 
                             class="card-img-top" 
                             alt="<?php echo $project['title']; ?>">
                        <div class="card-body">
                            <h5 class="card-title"><?php echo $project['title']; ?></h5>
                            <p class="card-text text-muted"><?php echo $project['description']; ?></p>
                            <?php foreach ($project['tags'] as $tag): ?>
                                <span class="badge bg-primary"><?php echo $tag; ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>