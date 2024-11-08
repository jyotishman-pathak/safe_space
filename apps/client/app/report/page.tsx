import React from 'react'

const Report = () => {
  return (
    <div>
      Incident Reporting Form: A form where users can:

Report incidents like harassment, suspicious activity, etc.
Include details: Type of incident, description, location (auto-captured via GPS), and an optional photo or video.
Submit the incident, which will then appear on the map for others to see.
Incident Details Page: Clicking on an incident marker on the map opens a detailed page showing:

Incident description.
Date and time of the incident.
Location.
Option to report similar incidents or share with others.
    </div>
  )
}

export default Report
