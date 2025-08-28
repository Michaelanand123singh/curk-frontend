// frontend/src/pages/ProposalSendPage.jsx
import React, { useEffect, useState } from 'react';
import { proposalsService } from '../services/reportService';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const ProposalSendPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [selected, setSelected] = useState(null);
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [toEmails, setToEmails] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await proposalsService.list();
        setProposals(Array.isArray(data.results) ? data.results : []);
      } catch (e) {
        setError(e.message || 'Failed to load proposals');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSend = async () => {
    if (!selected) return;
    const emails = toEmails.split(/\s|,|;|\n/).map(e => e.trim()).filter(Boolean);
    if (emails.length === 0) return;
    try {
      setSending(true);
      await proposalsService.sendBulkEmails({
        proposal_id: selected.proposal_id,
        to_emails: emails,
        from_email: fromEmail,
        from_name: fromName,
        reply_to: replyTo,
        use_proposal_subject: true,
      });
      alert('Emails sent');
    } catch (e) {
      alert(e.message || 'Send failed');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Send Proposals</h1>
          <p className="mt-2 text-gray-600">Select a generated proposal and send via SendGrid.</p>
        </div>

        {error && <div className="mb-6"><ErrorMessage message={error} /></div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded border p-4">
            <h2 className="font-semibold text-gray-900 mb-3">Proposals</h2>
            {loading ? <LoadingSpinner /> : (
              <ul className="divide-y">
                {proposals.map(p => (
                  <li key={p.proposal_id} className={`p-3 cursor-pointer ${selected?.proposal_id===p.proposal_id?'bg-blue-50':''}`} onClick={() => setSelected(p)}>
                    <div className="font-medium text-gray-900">{p.subject || '(no subject)'}</div>
                    <div className="text-xs text-gray-500">ID: {p.proposal_id}</div>
                  </li>
                ))}
                {proposals.length===0 && <li className="p-3 text-gray-500">No proposals yet.</li>}
              </ul>
            )}
          </div>
          <div className="bg-white rounded border p-4">
            <h2 className="font-semibold text-gray-900 mb-3">Recipients & From</h2>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">From name</label>
                <input className="w-full border rounded p-2" value={fromName} onChange={e=>setFromName(e.target.value)} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">From email</label>
                <input className="w-full border rounded p-2" value={fromEmail} onChange={e=>setFromEmail(e.target.value)} placeholder="you@domain.com" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Reply-To (optional)</label>
                <input className="w-full border rounded p-2" value={replyTo} onChange={e=>setReplyTo(e.target.value)} placeholder="reply@domain.com" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Emails (comma, space or newline separated)</label>
                <textarea className="w-full border rounded p-2 h-28" value={toEmails} onChange={e=>setToEmails(e.target.value)} />
              </div>
              <div className="flex gap-3">
                <button disabled={!selected||sending} onClick={handleSend} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">{sending?'Sending…':'Send bulk'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalSendPage;


