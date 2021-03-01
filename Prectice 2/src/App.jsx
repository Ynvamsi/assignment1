const contentNode = document.getElementById('contents');
class IssueFilter extends React.Component {
 render() {
 return (
 <div>This is a placeholder for the Issue Filter.</div>
 )
 }
}
class IssueTable extends React.Component {
    render() {
    const issueRows = this.props.issues.map(issue => <IssueRow 
   key={issue.id} issue={issue} />)
   return (
    <table className="bordered-table">
    <thead>
    <tr>
    <th>Id</th>
    <th>Status</th>
    <th>Owner</th>
    <th>Created</th>
    <th>Effort</th>
    <th>Completion Date</th>
    <th>Title</th>
    </tr>
    </thead>
    <tbody>{issueRows}</tbody>
    </table>
    )
    }
}
class IssueAdd extends React.Component {
    render() {
    return (
    <div>This is a placeholder for an Issue Add entry form.</div>
    )
    }
}
class IssueList extends React.Component {
    render() {
    return (
    <div>
    <h1>Issue Tracker</h1>
    <IssueFilter />
    <hr />
    <IssueTable  issues={issues}/>
    <hr />
    <IssueAdd />
    </div>
    );
    }
    const issues = [
        {
        id: 1, status: 'Open', owner: 'Ravan',
        created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
        },
        {
        id: 2, status: 'Assigned', owner: 'Eddie',
        created: new Date('2016-08-16'), effort: 14, 
       completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel',
        },
       ];
}

class IssueRow extends React.Component {
    render() {
    const borderedStyle = {border: "1px solid silver", padding: 4};
    return (
    <tr>
    <td style={borderedStyle}>{this.props.issue_id}</td>
    <td style={borderedStyle}>{this.props.children}</td>
    </tr>
    )
    }
}

ReactDOM.render(<IssueList />, contentNode); 