 <script>
      const root = 'https://challengers.peacefall.xyz';
      const id = new URL(window.location.href).searchParams.get('id');

      function getAssetLevel(level) {
        if (typeof level === 'number') {
          return level - 1;
        }
        return parseInt(level, 10) - 1;
      }
      fetch(`https://api.keyval.org/get/peacefall-${id}-revealed`)
        .then(res => res.json())
        .then(({
          val
        }) => {
          console.log(val);
          configure(val == 'true');
        })
        .catch(err => {
          console.log(err);
          configure(true);
        });

      function configure(revealed) {
        if (revealed) {
          document.querySelector('.revealer').style.display = 'none';
        } else {
          document.querySelector('.revealer').style.display = 'block';
        }
        const href = `${root}/${id}.json`;
        fetch(href).then((response) => {
          return response.json();
        }).then((json) => {
          // Configure character
          console.log('json', json);
          const attributes = {};
          json.attributes.forEach((attribute) => {
            attributes[attribute.trait_type] = attribute.value;
          });
          document.body.classList.add(attributes.Syndicate.toLowerCase());
          document.querySelector('.hp-record-value').textContent = attributes.HP;
          for (let i = 0; i < 5; i++) {
            const level = document.createElement('div');
            level.className = attributes.Level > i ? 'level-complete' : 'level-empty';
            document.querySelector('.level-values').appendChild(level);
          }

          const isDead = attributes.Dead === 'Yes';
          const activeInTournament = attributes['Active in Tournament'];
          if (isDead) {
            document.querySelector('.death').style.display = 'block';
          }

          if (activeInTournament) {
            document.querySelector('.tournament-active').style.display = 'block';
            document.querySelector('.tournament-active-type').textContent = activeInTournament;
          } else {
            document.querySelector('.tournament-not-active').style.display = 'block';
          }
          document.querySelector('.level-inside--warpeace').classList.add('ready');

          let wins = 0;

          if (json.chronicle) {
            json.chronicle.forEach((battle) => {
              if (battle.victor === parseInt(id, 10)) {
                wins++;
              }
            });
          }

          if (json.context_chronicles['champions-2022-07']) {
            json.context_chronicles['champions-2022-07'].forEach((battle) => {
              if (battle.victor === parseInt(id, 10)) {
                wins++;
              }
            });
          }

          if (json.context_chronicles['peaceful-2022-07']) {
            json.context_chronicles['peaceful-2022-07'].forEach((battle) => {
              if (battle.victor === parseInt(id, 10)) {
                wins++;
              }
            });
          }

          if (json.context_chronicles['fallen-2022-07']) {
            json.context_chronicles['fallen-2022-07'].forEach((battle) => {
              if (battle.victor === parseInt(id, 10)) {
                wins++;
              }
            });
          }

          document.querySelector('.win-record-value').textContent = wins;
          document.querySelector('.level-number').textContent = attributes.Level;
          if (attributes.Dead === 'Yes') {
            document.querySelector('.main').setAttribute('src', `${root}/${id}/dead.png`);
          } else {
            document.querySelector('.main').setAttribute('src', `${root}/${id}/${getAssetLevel(attributes.Level)}.gif`);
          }
          let i = 1;
          const maxAmount = 6
          while (i < maxAmount) {
            const thumbWrap = document.createElement('div');
            thumbWrap.className = 'thumb';
            const thumbTitle = document.createElement('div');
            thumbTitle.className = 'thumb-title';
            thumbTitle.textContent = `L${i}`;
            const img = document.createElement('img');
            img.setAttribute('version', i);
            if (attributes.Level >= i) {
              img.setAttribute('src', `${root}/${id}/${getAssetLevel(i)}.gif`);
            } else {
              img.setAttribute('src', '/blank.png');
              thumbWrap.classList.add('empty');
            }
            img.onerror = () => {
              img.setAttribute('src', '/blank.png');
              thumbWrap.classList.add('empty');
            };
            img.onclick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              document.querySelector('.main').src = img.src;
              document.querySelector('body').classList.remove('open');
            }
            thumbWrap.appendChild(img);
            thumbWrap.appendChild(thumbTitle);
            document.querySelector('.thumbs').appendChild(thumbWrap);
            i++;
          }
          // if dead, add box for dead state
          if (isDead) {
            const thumbWrap = document.createElement('div');
            thumbWrap.className = 'thumb';
            const thumbTitle = document.createElement('div');
            thumbTitle.className = 'thumb-title';
            thumbTitle.textContent = 'Dead';
            const img = document.createElement('img');
            img.setAttribute('version', i);
            img.setAttribute('src', `${root}/${id}/dead.png`);
            img.onerror = () => {
              img.setAttribute('src', '/blank.png');
              thumbWrap.classList.add('empty');
            };
            img.onclick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              document.querySelector('.main').src = img.src;
              document.querySelector('body').classList.remove('open');
            }
            thumbWrap.appendChild(img);
            thumbWrap.appendChild(thumbTitle);
            document.querySelector('.thumbs').appendChild(thumbWrap);
          }
        });



        document.querySelector('.main').setAttribute('src', `${root}/${id}/0.gif`);
      }

      function reveal(el) {
        el.classList.add('revealed');
        fetch(`https://api.keyval.org/set/peacefall-${id}-revealed/true`);
        setTimeout(() => {
          document.querySelector('.revealer').style.display = 'none';
        }, 5000);
      }

      function toggle() {
        document.querySelector('body').classList.toggle('open');
      }
    </script>
