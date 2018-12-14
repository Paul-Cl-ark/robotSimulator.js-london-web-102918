class Robot {
  constructor () {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates (x, y) {
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing (newBearing) {
    if (newBearing === 'north' || newBearing === 'south' || newBearing === 'east' || newBearing === 'west') {
      this.bearing = newBearing
    } else {
      throw Error('Invalid Robot Bearing')
    }
  }

  place (location) {
    this.setCoordinates(location['x'], location['y'])
    this.setBearing(location['direction'])
  }

  turnRight () {
    switch (this.bearing) {
      case 'north':
        this.setBearing('east')
        break
      case 'east':
        this.setBearing('south')
        break
      case 'south':
        this.setBearing('west')
        break
      case 'west':
        this.setBearing('north')
    }
  }

  turnLeft () {
    switch (this.bearing) {
      case 'north':
        this.setBearing('west')
        break
      case 'east':
        this.setBearing('north')
        break
      case 'south':
        this.setBearing('east')
        break
      case 'west':
        this.setBearing('south')
    }
  }

  advance () {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break
      case 'east':
        this.coordinates[0]++
        break
      case 'south':
        this.coordinates[1]--
        break
      case 'west':
        this.coordinates[0]--
    }
  }

  translateInstructions (instruction) {
    for (const step of instruction) {
      switch (step) {
        case 'L':
          this.turnLeft()
          break
        case 'R':
          this.turnRight()
          break
        case 'A':
          this.advance()
      }
    }
  }
}
