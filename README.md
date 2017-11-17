## Установка

На машине должен быть установлен `Gulp.js` глобально. Если нет - выполнить `sudo npm install gulp -g`.
Для установки всех модулей воспользоваться командой `npm install`, и в паку установятся все необходимые модули. <br>

## Сборка

Для сборки есть несколько команд:<br>
* `gulp` (или `npm run dev`) - запускает сборку в режиме разработки. При этом минифицируются только стили. Скрипты не минифицируются.<br>
* `gulp production` (или `npm run prod`) - сборка такая же, но выполняется единажды и с минификацией js-кода.<br>

При начале новой сборки, из папки `dist` удаляются все html-файлы, чтобы не оставалось мусора. Если файл удалили из папки `html`, он не удалится из `dist` слету. Для этого надо перезапустить сборку.<br>)

