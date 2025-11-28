function Logo() {
  try {
    return (
      <div className="flex items-center gap-2" data-name="logo" data-file="components/Logo.js">
        <div className="text-4xl font-bold text-white">λ</div>
        <span className="text-xl font-bold text-white">Lambda Core</span>
      </div>
    );
  } catch (error) {
    console.error('Logo component error:', error);
    return null;
  }
}
