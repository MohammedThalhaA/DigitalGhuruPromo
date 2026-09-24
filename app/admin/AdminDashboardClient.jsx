'use client';

import React from 'react';
import * as XLSX from 'xlsx';

export default function AdminDashboardClient({ initialData, totalViews = 0 }) {
  const totalRegistrations = initialData.length;
  const totalDownloaded = initialData.filter(r => r.ticket_downloaded).length;
  const conversionRate = totalViews > 0 ? ((totalRegistrations / totalViews) * 100).toFixed(1) : 0;

  const handleExport = () => {
    // 1. Prepare data for Excel
    const excelData = initialData.map(user => ({
      ID: user.id,
      Name: user.name,
      Phone: user.phone,
      Email: user.email,
      Status: user.status,
      'Area of Interest': user.interest,
      'Ticket ID': user.ticket_id || 'N/A',
      'Ticket Downloaded': user.ticket_downloaded ? 'Yes' : 'No',
      'Registered At': new Date(user.created_at).toLocaleString()
    }));

    // 2. Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

    // 3. Trigger download
    XLSX.writeFile(workbook, `DigitalGhuru_Registrations_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: 0, fontSize: '14px', color: '#64748b', textTransform: 'uppercase' }}>Total Visitors</h3>
          <p style={{ margin: '10px 0 0', fontSize: '32px', fontWeight: 'bold', color: '#8b5cf6' }}>{totalViews}</p>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#94a3b8' }}>Conversion: {conversionRate}%</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: 0, fontSize: '14px', color: '#64748b', textTransform: 'uppercase' }}>Total Registrations</h3>
          <p style={{ margin: '10px 0 0', fontSize: '32px', fontWeight: 'bold', color: '#0f172a' }}>{totalRegistrations}</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: 0, fontSize: '14px', color: '#64748b', textTransform: 'uppercase' }}>Tickets Downloaded</h3>
          <p style={{ margin: '10px 0 0', fontSize: '32px', fontWeight: 'bold', color: '#16a34a' }}>{totalDownloaded}</p>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>Recent Registrations</h2>
          <button 
            onClick={handleExport}
            style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Download Excel CSV
          </button>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={{ padding: '12px 20px', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '14px' }}>Name</th>
                <th style={{ padding: '12px 20px', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '14px' }}>Contact</th>
                <th style={{ padding: '12px 20px', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '14px' }}>Status</th>
                <th style={{ padding: '12px 20px', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '14px' }}>Interest</th>
                <th style={{ padding: '12px 20px', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '14px' }}>Ticket Status</th>
                <th style={{ padding: '12px 20px', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '14px' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {initialData.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px 20px', fontSize: '14px' }}><strong>{user.name}</strong></td>
                  <td style={{ padding: '16px 20px', fontSize: '14px' }}>
                    <div>{user.phone}</div>
                    <div style={{ color: '#64748b', fontSize: '12px' }}>{user.email}</div>
                  </td>
                  <td style={{ padding: '16px 20px', fontSize: '14px', textTransform: 'capitalize' }}>{user.status}</td>
                  <td style={{ padding: '16px 20px', fontSize: '14px' }}>{user.interest || '-'}</td>
                  <td style={{ padding: '16px 20px', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {user.ticket_downloaded ? (
                        <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>Downloaded</span>
                      ) : (
                        <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>Pending</span>
                      )}
                      {user.ticket_id && (
                        <span style={{ fontFamily: 'monospace', color: '#64748b', fontSize: '13px' }}>#{user.ticket_id}</span>
                      )}
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', fontSize: '14px', color: '#64748b' }}>
                    {new Date(user.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                </tr>
              ))}
              
              {initialData.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                    No registrations yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
