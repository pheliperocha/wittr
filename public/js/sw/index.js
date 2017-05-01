self.addEventListener('fetch', function(event) {
    event.respondWith(
        new Response('<h1 class="a-winner-is-me">PhelipeRocha</h1>', {
            headers: {'Content-Type': 'text/html; charset=utf-8'}
        })
    );
});