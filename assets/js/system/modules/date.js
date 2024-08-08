export const $init = () => {
  $local('[data-fn*="date-local"]');
  $local('[data-fn*="time-local"]', 4);
};

const $local = ($selector, $view = 0) => {
  const $el = document.querySelectorAll($selector);
  const $len = $el.length;
  let $utcDate, $localDate;

  for (let $i = 0; $i < $len; ++$i) {
    $utcDate = $el[$i].getAttribute('datetime');
    $localDate = $_date($utcDate, $view);
    $el[$i].textContent = $localDate;
  }
};

const $_date = ($iso, $view) => {
  let $out;

  const $date = new Date($iso);
  const $year = $date.getFullYear();
  const $month = $_f24($date.getMonth() + 1);
  const $day = $_f24($date.getDate());
  const $hours = $_f24($date.getHours());
  const $minutes = $_f24($date.getMinutes());
  const $seconds = $_f24($date.getSeconds());

  switch ($view) {
    case 0:
      $out = `${$year}/${$month}/${$day} ${$hours}:${$minutes}:${$seconds}`;
      break;
    case 1:
      $out = `${$year}/${$month}/${$day} ${$hours}:${$minutes}`;
      break;
    case 2:
      $out = `${$year}/${$month}/${$day}`;
      break;
    case 3:
      $out = `${$hours}:${$minutes}:${$seconds}`;
      break;
    case 4:
      $out = `${$hours}:${$minutes}`;
      break;
    default:
      console.error('Unknown type!');
  }

  return $out;
};

const $_f24 = ($num) => {
  if ($num < 10) {
    $num = '0' + $num;
  }
  return $num;
};
