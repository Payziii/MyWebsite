async function forecast(city) {
  const response = await fetch(
    `https://api.fifty.su/weather?city=${encodeURIComponent(city)}`,
    {
      method: 'GET'
    }
  )
  const data = await response.json()

  return data
}

async function icon(code, is_day) {
  const response = await fetch(
    `https://api.fifty.su/weather/icon?code=${code}&is_day=${is_day}`,
    {
      method: 'GET'
    }
  )
  const data = await response.json()

  return data
}

export default {
  forecast,
  icon
}