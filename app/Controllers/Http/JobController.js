'use strict'

/**
 * Resourceful controller for interacting with jobs
 */
class JobController {
  /**
   * Show a list of all jobs.
   * GET jobs
   */
  async index ({ request, response, view }) {
    response.send('vijay')
  }

  /**
   * Render a form to be used for creating a new job.
   * GET jobs/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new job.
   * POST jobs
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single job.
   * GET jobs/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing job.
   * GET jobs/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update job details.
   * PUT or PATCH jobs/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a job with id.
   * DELETE jobs/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = JobController
