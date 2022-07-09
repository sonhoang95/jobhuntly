// @desc    Get jobs
// @route   GET /api/v1/jobs
// @access  Private
const getAllJobs = async (req, res) => {
  res.status(200).json({ msg: "get all jobs" });
};

// @desc    Create job
// @route   POST /api/v1/jobs
// @access  Private
const createJob = async (req, res) => {
  res.status(200).json({ msg: "create job" });
};

// @desc    Update job
// @route   PATCH /api/v1/jobs/:id
// @access  Private
const updateJob = async (req, res) => {
  res.status(200).json({ msg: "update job" });
};

// @desc    Delete job
// @route   DELETE /api/v1/jobs/:id
// @access  Private
const deleteJob = async (req, res) => {
  res.status(200).json({ msg: "delete job" });
};

// @desc    Get stats
// @route   GET /api/v1/stats
// @access  Private
const showStats = async (req, res) => {
  res.status(200).json({ msg: "show stats" });
};

export { getAllJobs, createJob, updateJob, deleteJob, showStats };
