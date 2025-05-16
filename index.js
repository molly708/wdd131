let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesLength = names.map((name) => name.length);
names.reduce((total, name) => total + name.length, 0) / names.length;