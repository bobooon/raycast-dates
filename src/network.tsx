import { Icon, MenuBarExtra } from '@raycast/api'
import { useEffect, useState } from 'react'

export default function Network() {
  const [location, setLocation] = useState<string | false>(false)

  useEffect(() => {
    (async () => {
      try {
        const { execa } = await import('execa')
        setLocation((await execa`/usr/sbin/networksetup -getcurrentlocation`).stdout.trim())
      }
      catch {
        setLocation('')
      }
    })()
  }, [])

  return (
    <MenuBarExtra
      isLoading={location === false}
      title={location || 'No Location'}
      icon={location ? { source: '' } : { source: Icon.Warning, tintColor: 'orange' }}
    >
    </MenuBarExtra>
  )
}
