

export default function MeetingsList({meetings, onDelete}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Usun</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td><button onClick={() => onDelete(meeting)}>Usun</button></td>
                </tr>)
            }
            </tbody>
        </table>
    );
}
