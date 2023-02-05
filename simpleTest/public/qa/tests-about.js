suite('"About" links', function () {
    test("page should contain link to contact page", function () {
        assert($('a[href="/contact"]').length);
    });
    test("page should contain a navbar", function () {
        assert($('a[href="/"]').length);
    });
});

// suite('"About" home link', function () {
//     test("page should contain a navbar", function () {
//         assert($('a[href="/"]').length);
//     });
// });
