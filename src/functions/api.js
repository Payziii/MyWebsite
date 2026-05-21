async function forecast(city, lang = 'ru') {
  const response = await fetch(
    `https://api.fifty.su/weather?city=${encodeURIComponent(city)}&lang=${lang}`,
    { method: 'GET' }
  )
  if (!response.ok) throw new Error(`Weather fetch failed: ${response.status}`)
  return response.json()
}

async function icon(code, is_day) {
  const response = await fetch(
    `https://api.fifty.su/weather/icon?code=${code}&is_day=${is_day}`,
    { method: 'GET' }
  )
  if (!response.ok) throw new Error(`Icon fetch failed: ${response.status}`)
  return response.json()
}

async function waka() {
  const response = await fetch(
    `https://api.fifty.su/wakatime/my_hours`,
    { method: 'GET' }
  )
  if (!response.ok) throw new Error(`Wakatime fetch failed: ${response.status}`)
  return response.json()
}

export default {
  forecast,
  icon,
  waka
}
