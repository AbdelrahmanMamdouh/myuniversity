/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Post;

import Notification.Notification;
import Registration.CourseOffering;

/**
 *
 * @author marcw
 */
public class Graded extends AbstractPost {

	CourseOffering cource;
	int maxGrade, scaleFactor;

	@Override
	protected Notification generateNotification(String title, String message) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}
}