const packageName =  'do-not-track';

function getConfig(key: string): unknown {
  return (key
    ? atom.config.get(`${packageName}.${key}`)
    : atom.config.get(packageName)
  );
}

export {
  getConfig
}
