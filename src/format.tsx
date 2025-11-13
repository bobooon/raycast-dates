import { Action, ActionPanel, Color, List } from '@raycast/api'
import { parseDate } from 'chrono-node'
import dayjs from 'dayjs'
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat.js'
import relativeTimePlugin from 'dayjs/plugin/relativeTime.js'
import timezonePlugin from 'dayjs/plugin/timezone.js'
import utcPlugin from 'dayjs/plugin/utc.js'
import weekOfYearPlugin from 'dayjs/plugin/weekOfYear.js'
import { useMemo, useState } from 'react'

dayjs.extend(advancedFormatPlugin)
dayjs.extend(weekOfYearPlugin)
dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)
dayjs.extend(relativeTimePlugin)

const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

function process(input: string, timezone: string) {
  if (input.match(/^\d+$/)) {
    const timestamp = Number.parseInt(input, 10)
    input = new Date(timestamp > 4102444800 ? timestamp : timestamp * 1000).toString()
  }

  const dateParsed = parseDate(input)
  if (!dateParsed || dateParsed.toString() === 'Invalid Date')
    return []

  const date = dayjs(dateParsed).tz(timezone)
  const dateFrom = date.fromNow()

  return [
    { label: 'Unix (s)', value: date.unix() },
    { label: 'Unix (ms)', value: date.valueOf() },
    { label: 'Human Readable', value: date.format('MMMM Do, YYYY [at] hh:mm:ss A (zzz)') },
    { label: 'DateTime', value: date.format('YYYY-MM-DD HH:mm:ss') },
    { label: 'String', value: date.toString() },
    { label: 'ISO 8601', value: date.toISOString() },
    { label: 'Week of Year', value: date.format('wo dddd [of] YYYY') },
    { label: 'In / Ago', value: dateFrom.charAt(0).toUpperCase() + dateFrom.slice(1) },
  ]
}

export default function Format() {
  const [input, setInput] = useState('now')
  const [timezone, setTimezone] = useState(defaultTimezone)
  const [items, setItems] = useState<{ label: string, value: string | number }[]>([])

  const onTimezoneChange = (value: string) => {
    setTimezone(value)
    setItems(process(input, value))
  }

  const onSearchTextChange = (value: string) => {
    setInput(value)
    setItems(process(value, timezone))
  }

  const timezones = useMemo(() => Intl.supportedValuesOf('timeZone'), [])

  return (
    <List
      searchBarPlaceholder="Date"
      filtering={false}
      searchText={input}
      onSearchTextChange={onSearchTextChange}
      searchBarAccessory={(
        <List.Dropdown tooltip="Timezone" onChange={onTimezoneChange} defaultValue={timezone}>
          {timezones.map(zone => (
            <List.Dropdown.Item key={zone} value={zone} title={zone} />
          ))}
        </List.Dropdown>
      )}
    >
      {items.map(item => (
        <List.Item
          key={item.label}
          title={String(item.value)}
          accessories={[{ tag: { value: item.label, color: Color.SecondaryText } }]}
          actions={(
            <ActionPanel>
              <Action.CopyToClipboard content={String(item.value)} />
              <Action.Paste content={String(item.value)} />
            </ActionPanel>
          )}
        />
      ))}
    </List>
  )
}
