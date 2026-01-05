import { useState } from "react";
import './resume.css';

export default function ResumeCli(){
    const [command, setCommand] = useState("");
    const [logs, setLogs] = useState([]);

    async function runCommand(){
        const res = await fetch('http://localhost:3000/about/cli',{
            method: 'POST',
            headers: {'Content-Type':'application/json' },
            body: JSON.stringify({command})
        })

        const data = await res.json();
        console.log(data);
        if(data.output === 'clearCommand'){
            setLogs([]);
        }

        setLogs(prev => [
            ...prev,
            `> ${command}`,
            data.output
              ? JSON.stringify(data.output, null, 2)
              : data.error,
            data.help || ''
          ]);
      
          setCommand('');
    }

return (
    <div className="terminal">
      <div className="output">
        {logs.map((line, i) => (
          <pre key={i}>{line}</pre>
        ))}
      </div>

      <div className="input">
        <span>$</span>
        <input
          value={command}
          onChange={e => setCommand(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && runCommand()}
          placeholder="type a command..."
        />
      </div>
    </div>
  );
}