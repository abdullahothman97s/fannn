interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes?: string;
}

interface EmailTemplate {
  subject: string;
  html: string;
}

export class EmailService {
  private static instance: EmailService;
  private scheduledReminders: Map<string, NodeJS.Timeout> = new Map();

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  // Schedule reminder email 8 hours before appointment
  scheduleReminderEmail(bookingData: BookingData): void {
    const appointmentDateTime = new Date(`${bookingData.date}T${this.convertTo24Hour(bookingData.time)}`);
    const reminderTime = new Date(appointmentDateTime.getTime() - (8 * 60 * 60 * 1000)); // 8 hours before
    const now = new Date();

    // Only schedule if reminder time is in the future
    if (reminderTime > now) {
      const timeUntilReminder = reminderTime.getTime() - now.getTime();
      
      const timeoutId = setTimeout(() => {
        this.sendReminderEmail(bookingData);
      }, timeUntilReminder);

      // Store the timeout ID for potential cancellation
      const bookingId = `${bookingData.email}-${bookingData.date}-${bookingData.time}`;
      this.scheduledReminders.set(bookingId, timeoutId);

      console.log(`Reminder scheduled for ${reminderTime.toLocaleString('ar-EG')} (8 hours before appointment)`);
    }
  }

  // Convert 12-hour format to 24-hour format
  private convertTo24Hour(time12h: string): string {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    
    if (hours === '12') {
      hours = '00';
    }
    
    if (modifier === 'PM') {
      hours = (parseInt(hours, 10) + 12).toString();
    }
    
    return `${hours.padStart(2, '0')}:${minutes}:00`;
  }

  // Send reminder email
  private async sendReminderEmail(bookingData: BookingData): Promise<void> {
    const template = this.createReminderEmailTemplate(bookingData);
    
    try {
      // In a real application, you would use a service like SendGrid, Nodemailer, etc.
      // For now, we'll simulate the email sending
      await this.simulateEmailSending(bookingData.email, template);
      
      console.log(`Reminder email sent to ${bookingData.email}`);
    } catch (error) {
      console.error('Failed to send reminder email:', error);
    }
  }

  // Create email template for reminder
  private createReminderEmailTemplate(bookingData: BookingData): EmailTemplate {
    const appointmentDate = new Date(bookingData.date).toLocaleDateString('ar-EG', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return {
      subject: 'تذكير موعد تعريب الكيبورد - شركة الفنان',
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>تذكير موعد - شركة الفنان</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
              direction: rtl;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #ff3234, #dc2626);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: bold;
            }
            .header p {
              margin: 10px 0 0 0;
              font-size: 16px;
              opacity: 0.9;
            }
            .content {
              padding: 30px;
            }
            .appointment-details {
              background: #f8f9fa;
              border-right: 4px solid #ff3234;
              padding: 20px;
              margin: 20px 0;
              border-radius: 5px;
            }
            .appointment-details h3 {
              color: #ff3234;
              margin-top: 0;
              font-size: 20px;
            }
            .detail-row {
              display: flex;
              justify-content: space-between;
              margin: 10px 0;
              padding: 8px 0;
              border-bottom: 1px solid #eee;
            }
            .detail-label {
              font-weight: bold;
              color: #555;
            }
            .detail-value {
              color: #333;
            }
            .location-section {
              background: #e3f2fd;
              border-right: 4px solid #2196f3;
              padding: 20px;
              margin: 20px 0;
              border-radius: 5px;
            }
            .location-section h3 {
              color: #1976d2;
              margin-top: 0;
            }
            .contact-info {
              background: #f1f8e9;
              border-right: 4px solid #4caf50;
              padding: 20px;
              margin: 20px 0;
              border-radius: 5px;
            }
            .contact-info h3 {
              color: #388e3c;
              margin-top: 0;
            }
            .cta-button {
              display: inline-block;
              background: #ff3234;
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              margin: 20px 0;
              text-align: center;
            }
            .footer {
              background: #333;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 14px;
            }
            .logo {
              width: 60px;
              height: 60px;
              margin: 0 auto 15px;
              background: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              color: #ff3234;
              font-size: 24px;
            }
            @media (max-width: 600px) {
              .container {
                margin: 10px;
                border-radius: 5px;
              }
              .header, .content {
                padding: 20px;
              }
              .detail-row {
                flex-direction: column;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">EF</div>
              <h1>شركة الفنان مستنينك!</h1>
              <p>تذكير بموعد تعريب الكيبورد بإحترافية</p>
            </div>
            
            <div class="content">
              <h2>مرحباً ${bookingData.fullName}،</h2>
              
              <p>نتطلع لرؤيتك قريباً! هذا تذكير بموعدك لتعريب الكيبورد في شركة الفنان.</p>
              
              <p><strong>لو عايز الجودة والأمان مستنينك في الفنان</strong></p>
              
              <div class="appointment-details">
                <h3>📅 تفاصيل الموعد</h3>
                <div class="detail-row">
                  <span class="detail-label">التاريخ:</span>
                  <span class="detail-value">${appointmentDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">الوقت:</span>
                  <span class="detail-value">${bookingData.time}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">الاسم:</span>
                  <span class="detail-value">${bookingData.fullName}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">رقم الهاتف:</span>
                  <span class="detail-value">${bookingData.phone}</span>
                </div>
                ${bookingData.notes ? `
                <div class="detail-row">
                  <span class="detail-label">ملاحظات:</span>
                  <span class="detail-value">${bookingData.notes}</span>
                </div>
                ` : ''}
              </div>
              
              <div class="location-section">
                <h3>📍 موقع الفرع</h3>
                <p><strong>العنوان:</strong> القاهرة - وسط البلد - سيتي مول شارع محمد محمود</p>
                <p>يمكنك الوصول إلينا بسهولة في وسط القاهرة</p>
                <a href="https://maps.app.goo.gl/rXKtZLdUr2umrc8UA" class="cta-button" target="_blank">
                  🗺️ احصل على الاتجاهات
                </a>
              </div>
              
              <div class="contact-info">
                <h3>📞 معلومات الاتصال</h3>
                <p><strong>رقم الهاتف:</strong> 01091054529</p>
                <p><strong>ساعات العمل:</strong> يومياً من الساعة 12 ظهراً الى 9 مساءً</p>
                <p>إذا كان لديك أي استفسار أو تحتاج لتعديل الموعد، لا تتردد في الاتصال بنا</p>
                <a href="tel:01091054529" class="cta-button">
                  📱 اتصل بنا الآن
                </a>
                <a href="https://api.whatsapp.com/send?phone=201091054529&text=مرحباً!%20لدي%20موعد%20اليوم%20لتعريب%20الكيبورد" class="cta-button" target="_blank">
                  💬 واتساب
                </a>
              </div>
              
              <div style="background: #fff3cd; border-right: 4px solid #ffc107; padding: 20px; margin: 20px 0; border-radius: 5px;">
                <h3 style="color: #856404; margin-top: 0;">⚠️ تذكير مهم</h3>
                <ul style="color: #856404; margin: 0; padding-right: 20px;">
                  <li>احضر جهازك معك للتقييم المباشر</li>
                  <li>الخدمة تتم في نفس الوقت (10 دقائق تقريباً)</li>
                  <li>لا نحتاج لترك الجهاز معنا</li>
                  <li>يمكنك مشاهدة عملية التعريب بنفسك</li>
                </ul>
              </div>
              
              <p>نحن متحمسون لخدمتك وتقديم أفضل خدمة تعريب كيبورد في مصر!</p>
              
              <p>مع أطيب التحيات،<br><strong>فريق شركة الفنان</strong></p>
            </div>
            
            <div class="footer">
              <p>&copy; 2024 شركة الفنان - جميع الحقوق محفوظة</p>
              <p>متخصصون في تعريب الكيبوردات بالليزر</p>
            </div>
          </div>
        </body>
        </html>
      `
    };
  }

  // Simulate email sending (replace with actual email service)
  private async simulateEmailSending(email: string, template: EmailTemplate): Promise<void> {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // In a real application, you would integrate with:
        // - SendGrid
        // - Nodemailer with SMTP
        // - AWS SES
        // - Mailgun
        // etc.
        
        console.log('📧 Email Sent Successfully!');
        console.log(`To: ${email}`);
        console.log(`Subject: ${template.subject}`);
        console.log('Email content prepared and would be sent via email service');
        
        resolve();
      }, 1000);
    });
  }

  // Cancel scheduled reminder
  cancelReminder(bookingData: BookingData): void {
    const bookingId = `${bookingData.email}-${bookingData.date}-${bookingData.time}`;
    const timeoutId = this.scheduledReminders.get(bookingId);
    
    if (timeoutId) {
      clearTimeout(timeoutId);
      this.scheduledReminders.delete(bookingId);
      console.log(`Reminder cancelled for booking: ${bookingId}`);
    }
  }

  // Get all scheduled reminders (for debugging)
  getScheduledReminders(): string[] {
    return Array.from(this.scheduledReminders.keys());
  }
}

export default EmailService;