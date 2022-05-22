let createHTMLHead = () => {
  let head = document.createElement('head');

  let meta = document.createElement('meta');
  meta.setAttribute('charSet', 'UTF-8');

  let title = document.createElement('title');
  title.innerText = 'Book Shop - Main';

  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'style.css');

  let script = document.createElement('script');
  script.setAttribute('src', 'https://kit.fontawesome.com/953da7e70f.js');
  script.setAttribute('crossOrigin', 'anonymous');

  head.appendChild(meta);
  head.appendChild(title);
  head.appendChild(link);
  head.appendChild(script);

  return head;
}

export {createHTMLHead};
