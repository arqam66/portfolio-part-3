// jQuery for Skill Progress Bars (Circular)
jQuery(document).ready(function($) {

  // HTML & CSS progress circular bar
  let htmlProgress = $(".html-css"),
      htmlValue = $(".html-progress");

  let htmlStartValue = 0,
      htmlEndValue = 80,
      htmlSpeed = 30;

  let progressHtml = setInterval(() => {
      htmlStartValue++;

      htmlValue.text(`${htmlStartValue}%`);
      htmlProgress.css('background', `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`);

      if (htmlStartValue === htmlEndValue) {
          clearInterval(progressHtml);
      }
  }, htmlSpeed);

  // JavaScript progress circular bar
  let javascriptProgress = $(".javascript"),
      javascriptValue = $(".javascript-progress");

  let javascriptStartValue = 0,
      javascriptEndValue = 89,
      jsSpeed = 30;

  let progressJs = setInterval(() => {
      javascriptStartValue++;

      javascriptValue.text(`${javascriptStartValue}%`);
      javascriptProgress.css('background', `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`);

      if (javascriptStartValue === javascriptEndValue) {
          clearInterval(progressJs);
      }
  }, jsSpeed);

  // GitHub & Git progress circular bar
  let githubGitProgress = $(".github-git"),
      githubGitValue = $(".github-git-progress");

  let githubGitStartValue = 0,
      githubGitEndValue = 90,
      githubGitSpeed = 30;

  let progressGithubGit = setInterval(() => {
      githubGitStartValue++;

      githubGitValue.text(`${githubGitStartValue}%`);
      githubGitProgress.css('background', `conic-gradient(#20c997 ${githubGitStartValue * 3.6}deg, #ededed 0deg)`);

      if (githubGitStartValue === githubGitEndValue) {
          clearInterval(progressGithubGit);
      }
  }, githubGitSpeed);

  // ReactJS progress circular bar
  let reactProgress = $(".reactjs"),
      reactValue = $(".reactjs-progress");

  let reactStartValue = 0,
      reactEndValue = 88,
      reactSpeed = 30;

  let progressReact = setInterval(() => {
      reactStartValue++;

      reactValue.text(`${reactStartValue}%`);
      reactProgress.css('background', `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`);

      if (reactStartValue === reactEndValue) {
          clearInterval(progressReact);
      }
  }, reactSpeed);

  // Back to top button functionality
  let mybutton = $("#btn-back-to-top");

  $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
          mybutton.fadeIn();
      } else {
          mybutton.fadeOut();
      }
  });

  mybutton.click(function() {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

});
