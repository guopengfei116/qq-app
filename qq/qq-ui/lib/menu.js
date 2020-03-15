// 深度优先搜索
const depthFirst = (menus, url) => {
  let matchId;

  menus.some(menu => {
    if (menu.url === url) {
      matchId = menu.id;
    } else if (menu.children && menu.children.length) {
      matchId = depthFirst(menu.children, url);
    }
    return !!matchId;
  });

  return matchId;
};

// 广度优先搜索
const breadthFirst = (menus, url) => {
  let matchId;
  const children = [];

  menus.some(menu => {
    if (menu.url === url) {
      matchId = menu.id;
      return true;
    }
    children.push(...(menu.children || []));
  });

  // Unmatch && Next leval
  if (!matchId && children.length) {
    matchId = breadthFirst(children, url);
  }

  return matchId;
};

export default (menus, url) => {
  // safari 不兼容
  // const pathSplitReg = /(?<=[^/])\/(?=[^/])/;
  const pathSplitReg = /\/(?=[^/])/;
  const pathDepth = url.split(pathSplitReg).length;

  if (pathDepth > 2) {
    return depthFirst(menus, url);
  } else {
    return breadthFirst(menus, url);
  }
};
