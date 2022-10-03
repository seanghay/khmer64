

/**
 * @type {HTMLFormElement}
 */
let f = form;
let _config = config();

const $text = f['text'];
const $result = f['result'];

f.addEventListener('input', run)

function config() {
  const params = new URLSearchParams(new FormData(f));
  return Object.fromEntries(params.entries())
}


function run() {
  const currentConfig = config();
  if (currentConfig.mode !== _config.mode) {
    let temp = $result.value;
    $result.value = $text.value;
    $text.value = temp;
  }

  _config = currentConfig;

  try {
    $result.value = base64[_config.mode]($text.value);
  } catch(e) {
    $result.value = 'ERR!'
  }
}


run();
