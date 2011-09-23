$(function() {
   // Deck initialization
   $.deck('.slide');

   $('#style-themes').change(function() {
      $('#style-theme-link').attr('href', $(this).val());
   });

   $('#transition-themes').change(function() {
      $('#transition-theme-link').attr('href', $(this).val());
   });

   SyntaxHighlighter.defaults.toolbar = false;
   SyntaxHighlighter.defaults.gutter = false;
   SyntaxHighlighter.all()
});

