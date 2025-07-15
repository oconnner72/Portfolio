import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      // You would typically send this data to your backend or a service like Formspree
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("contact.info.email"),
      value: "brian.ramirez.a@outlook.com",
      href: "brian.ramirez.a@outlook.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("contact.info.phone"),
      value: "+52 (352) 529-5667",
      href: "tel:+523525295667",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("contact.info.location"),
      value: "La Ribera, Jalisco",
      href: "https://maps.google.com/?q=La Ribera, Jalisco",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/oconnner72",
      color: "hover:text-chrome-silver",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/brayan-ramírez-ávila-822ab534a",
      color: "hover:text-speed-blue",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-carbon-gray/20 to-midnight-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-racing font-bold mb-6 gradient-text">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card-glow rounded-2xl p-8">
              <h3 className="text-2xl font-racing font-bold mb-6 text-racing-red">
                {t("contact.connectTitle")}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t("contact.connectDescription")}
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 bg-carbon-gray/20 rounded-lg hover:bg-racing-red/10 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-racing-red/20 rounded-full flex items-center justify-center text-racing-red group-hover:bg-racing-red/30 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-carbon-gray/30">
                <h4 className="text-lg font-racing font-bold mb-4 text-chrome-silver">
                  {t("contact.followTitle")}
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-carbon-gray/30 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-glow rounded-2xl p-8"
          >
            <h3 className="text-2xl font-racing font-bold mb-6 text-electric-green">
              {t("contact.formTitle")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-black/50 border border-carbon-gray/30 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-racing-red text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-black/50 border border-carbon-gray/30 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-racing-red text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-midnight-black/50 border border-carbon-gray/30 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-racing-red text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder={t("contact.form.subjectPlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-midnight-black/50 border border-carbon-gray/30 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-racing-red text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-racing-red to-engine-orange text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    {t("contact.form.sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("contact.form.send")}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-carbon-gray/30"
        >
          <p className="text-gray-400 text-sm">{t("contact.footer")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
