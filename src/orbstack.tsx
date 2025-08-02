import { readFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'
import { MenuBarExtra } from '@raycast/api'
import { useEffect, useState } from 'react'

export default function Orbstack() {
  const [name, setName] = useState<string | false>(false)

  useEffect(() => {
    (async () => {
      try {
        setName(path.basename(JSON.parse(await readFile(`${homedir()}/.orbstack/vmconfig.json`, 'utf8')).data_dir))
      }
      catch {
        setName('Default')
      }
    })()
  }, [])

  return <MenuBarExtra isLoading={!name} title={name || ''}></MenuBarExtra>
}
