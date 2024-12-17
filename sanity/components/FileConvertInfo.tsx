export const FileConvertInfo = () => (
    <div
  id="alert-additional-content-2"
  style={{
    padding: '16px',
    marginBottom: '16px',
    color: '#b91c1c',
    border: '1px solid #fca5a5',
    borderRadius: '8px',
    backgroundColor: '#fef2f2',
    
  }}
>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <svg
      style={{ flexShrink: 0, width: '16px', height: '16px', marginRight: '8px' }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
    <span style={{ position: 'absolute', left: '-9999px' }}>Info</span>
  
  </div>
  <div style={{ marginTop: '8px', marginBottom: '16px', fontSize: '14px' }}>
   Przed wrzuceniem PDF, skorzystaj z narzędzia do konwersji z linku poniżej.
  </div>
  <div style={{ display: 'flex' }}>
    <button
      type="button"
      style={{
        color: '#fff',
        backgroundColor: '#991b1b',
        border: 'none',
        padding: '6px 12px',
        fontSize: '12px',
        borderRadius: '8px',
        marginRight: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    
    >
     <a href="https://www.ilovepdf.com/compress_pdf" target="_blank">

      link
     </a>
    </button>
  
  </div>
</div>

  );