// This builds the grid by building the number of rows and then adding
// the same number of squares to the rows. This leaves you with a square grid.
function buildGrid (squaresPerSide) {
    // Build the number of rows (how tall grid is)
    var $tempRow = $('<div class="row"></div>');
    var $tempContainer = $('.project-grid-container');
    for (var i=0; i <= squaresPerSide; i++) {
        $tempRow.clone().appendTo($tempContainer);
    };
    // Fill the rows with squares (how wide the grid is)
    var $tempSquare = $('<div class="grid-square"></div>');
    var $tempBuiltRow = $('.row');
    for (var i=0; i <= squaresPerSide; i++) {
        $tempSquare.clone().appendTo($tempBuiltRow);
    };
    // Specify the size of the squares based on how many there are
    var squareSize = $('.project-grid-container').width() / squaresPerSide;
    $('.grid-square').css({
        'width':squareSize,
        'height': squareSize,
    });
}
var squaresPerSide = 400
buildGrid(squaresPerSide);
