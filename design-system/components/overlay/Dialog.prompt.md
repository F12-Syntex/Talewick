Modal glass panel with blurred backdrop and blur-in entrance; for confirmations and settings.

~~~jsx
<Dialog open={open} onClose={() => setOpen(false)} title="Delete book?" footer={<Button variant="danger">Delete</Button>} />
~~~

- Esc and backdrop click call onClose.
