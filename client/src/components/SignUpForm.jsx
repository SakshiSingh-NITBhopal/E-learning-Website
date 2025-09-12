const SignUpForm = ({ handleChange, handleSubmit, formData, errors, loading }) => {
  return (
    <form
      className="flex flex-col mt-12 mb-12 gap-6 max-w-lg w-full mx-auto bg-secondary p-8 rounded-lg shadow-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-primary mb-2 text-center">Sign Up</h2>

      {/* Handling Backend Error */}
      {errors.api && (
        <div className="text-red-500 text-center mb-4 font-medium">
          {errors.api}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium text-text mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 rounded border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium text-text mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium text-text mb-1">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="px-4 py-2 rounded border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className={`mt-2 bg-primary text-white font-semibold py-2 rounded transition-colors 
          ${loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-accent hover:cursor-pointer'
          }
        `}
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  )
}

export default SignUpForm;