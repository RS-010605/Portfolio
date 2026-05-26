import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Branding',
    budget: '$1k - $3k',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch(
        "https://portfolio-backend-one-cyan.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {

        alert("Message Sent Successfully");

        setSuccess(true);

        setFormData({
          name: '',
          email: '',
          projectType: 'Branding',
          budget: '$1k - $3k',
          message: '',
        });

      } else {

        alert(data.error || "Something went wrong");

      }

    } catch (error) {

      console.log(error);

      alert("Network Error");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Let's Create <br />
              <span className="text-gradient">
                Something Epic.
              </span>
            </h2>

            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Available for freelance opportunities.
              Let's discuss your project and build
              something amazing together.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <p className="text-white font-medium">
                    hello@devstudio.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-orange-400">
                  <MessageSquare size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    WhatsApp
                  </p>

                  <p className="text-white font-medium">
                    +91 9876543210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-pink-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Location
                  </p>

                  <p className="text-white font-medium">
                    India (Remote Worldwide)
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl"
          >

            {
              success ? (

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >

                  <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-8">

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      className="text-5xl text-green-400"
                    >
                      ✓
                    </motion.div>

                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    Message Sent Successfully
                  </h3>

                  <p className="text-zinc-400 max-w-md leading-relaxed">
                    Thanks for reaching out.
                    I’ll review your project details
                    and get back to you soon.
                  </p>

                </motion.div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition"
                    />

                  </div>

                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                  >
                    <option className="bg-black">
                      Branding
                    </option>

                    <option className="bg-black">
                      Video Editing
                    </option>

                    <option className="bg-black">
                      Social Media
                    </option>

                    <option className="bg-black">
                      Other
                    </option>
                  </select>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                  >
                    <option className="bg-black">
                      $1k - $3k
                    </option>

                    <option className="bg-black">
                      $3k - $5k
                    </option>

                    <option className="bg-black">
                      $5k - $10k
                    </option>

                    <option className="bg-black">
                      $10k+
                    </option>
                  </select>

                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-lg hover:opacity-90 transition duration-300 disabled:opacity-50"
                  >
                    {
                      loading
                        ? 'Sending...'
                        : 'Send Message'
                    }
                  </button>

                </form>

              )
            }

          </motion.div>

        </div>
      </div>
    </section>
  );
}